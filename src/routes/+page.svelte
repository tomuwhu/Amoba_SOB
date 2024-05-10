<script>
    var size = 5
    var nyert = false
    $: t = Array(size).fill(0).map((v, i) => 
        Array(size).fill(0).map((v, i) => " ")
    )
    var next = "X"
</script>
<h1>Amőba</h1>
<input type="range" bind:value={size} min=5 max=12>
{#if !nyert}
<table>
{#each t as row, y}
    <tr>
        {#each row as cell, x}
            <td on:click={() => {               
                cell = next = next == "X" ? "O" : "X";
                [[1, 0], [0, 1], [1, 1], [1, -1]].forEach(ir => {
                    var n = 0, xp=x, yp=y
                    do {
                        n++
                        xp += ir[0]
                        yp += ir[1]
                    } while(yp<size && yp>=0 && t[yp][xp]==next)
                    var xp=x, yp=y
                    do {
                        n++
                        xp -= ir[0]
                        yp -= ir[1]
                    } while(yp<size && yp>=0 && t[yp][xp]==next)
                    console.log(ir, n);
                    if (n > 5) nyert = true
                })
            }} class={cell}>{cell}</td>
        {/each}
    </tr>
{/each}
</table>
{:else}
<div>NYERT <table><tr><td class={next}>{next}</td></tr></table>!!!</div>
<hr>
<button on:click={() => {
    t = Array(size).fill(0).map((v, i) => 
            Array(size).fill(0).map((v, i) => " ")
        )
    nyert = false
}}>Új játék</button>
{/if}
