<script>
    const d0 = new Date()
    var d1 = d0.toISOString().split('T')[0], d2 = d1
    d0.setDate(d0.getDate() + 1)
    var d2 = d0.toISOString().split('T')[0]
    $: sub = (new Date(d2) - new Date(d1)) / (24 * 60 * 60 * 1000)
    $: ev = (sub/365.2501).toFixed(2)
</script>
<h1>Dátum input</h1>
<br><hr>
<input type="date" bind:value={d1}>
<br><br>
{d1.split("-").join(". ")}.
<hr>
<input type="date" bind:value={d2}>
<br><br>
{d2.split("-").join(". ")}.
<hr>
{sub} nap a különbség
{#if ev >= 0.01} (kb. {ev} év){/if}