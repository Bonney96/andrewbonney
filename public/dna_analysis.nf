#!/usr/bin/env nextflow
// ============================================================

// dna_analysis.nf — Sequence Analysis Demo Pipeline
// andrewbonney.cloud/lab
//
// Usage:
//   nextflow run dna_analysis.nf --sequence "ATCGATCG"
//
// Requirements: Nextflow 23+, Python 3.8+
// No additional tools required.
// ============================================================

nextflow.enable.dsl=2

params.sequence = 'ATCGATCGATCGATCGATCG'
params.outdir   = './results'

// ── Processes ────────────────────────────────────────────────

process VALIDATE_SEQUENCE {
    tag "validation"

    input:
    val seq

    output:
    val seq

    script:
    """
    python3 -c "
import sys
seq = '${seq}'.upper().strip()
valid = set('ATCGN')
if not all(c in valid for c in seq):
    sys.exit('Invalid characters in sequence. Only A, T, C, G, N allowed.')
if len(seq) < 10:
    sys.exit('Sequence too short (minimum 10 bp).')
if len(seq) > 500:
    sys.exit('Sequence too long (maximum 500 bp).')
print(f'Validated: {len(seq)} bp')
"
    """
}

process COMPUTE_STATS {
    tag "stats"
    publishDir params.outdir, mode: 'copy'

    input:
    val seq

    output:
    path "stats.txt"

    script:
    """
    python3 -c "
seq = '${seq}'.upper()
length = len(seq)
gc = (seq.count('G') + seq.count('C')) / length * 100
at = (seq.count('A') + seq.count('T')) / length * 100
g  = seq.count('G')
c  = seq.count('C')
gc_skew = (g - c) / (g + c) if (g + c) > 0 else 0

# K-mer frequency (3-mers)
kmers = {}
for i in range(len(seq) - 2):
    k = seq[i:i+3]
    kmers[k] = kmers.get(k, 0) + 1
top = sorted(kmers.items(), key=lambda x: -x[1])[:5]

with open('stats.txt', 'w') as f:
    f.write(f'Length:      {length} bp\n')
    f.write(f'GC Content:  {gc:.1f}%\n')
    f.write(f'AT Content:  {at:.1f}%\n')
    f.write(f'GC Skew:     {gc_skew:+.3f}\n')
    f.write(f'Top 3-mers:  {top}\n')
" 2>&1
    """
}

process REVERSE_COMPLEMENT {
    tag "revcomp"
    publishDir params.outdir, mode: 'copy'

    input:
    val seq

    output:
    path "revcomp.txt"

    script:
    """
    python3 -c "
seq = '${seq}'.upper()
table = str.maketrans('ATCGN', 'TAGCN')
revcomp = seq.translate(table)[::-1]
with open('revcomp.txt', 'w') as f:
    f.write(f'Input:   {seq}\n')
    f.write(f'RevComp: {revcomp}\n')
"
    """
}

process MOTIF_SCAN {
    tag "motifs"
    publishDir params.outdir, mode: 'copy'

    input:
    val seq

    output:
    path "motifs.txt"

    script:
    """
    python3 -c "
seq = '${seq}'.upper()

sites = {
    'EcoRI':   'GAATTC',
    'BamHI':   'GGATCC',
    'HindIII': 'AAGCTT',
    'NotI':    'GCGGCCGC',
    'NcoI':    'CCATGG',
    'SalI':    'GTCGAC',
}

results = []
for name, pattern in sites.items():
    positions = []
    start = 0
    while True:
        pos = seq.find(pattern, start)
        if pos == -1:
            break
        positions.append(pos + 1)  # 1-indexed
        start = pos + 1
    if positions:
        results.append(f'{name} ({pattern}): positions {positions}')

with open('motifs.txt', 'w') as f:
    if results:
        f.write('\n'.join(results) + '\n')
    else:
        f.write('No common restriction sites detected.\n')
"
    """
}

// ── Workflow ──────────────────────────────────────────────────

workflow {
    ch_seq = Channel.of(params.sequence)

    validated = VALIDATE_SEQUENCE(ch_seq)
    COMPUTE_STATS(validated)
    REVERSE_COMPLEMENT(validated)
    MOTIF_SCAN(validated)
}
