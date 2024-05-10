<script>
    var size = 5, nyert = false, next = "X"
    $: t = !nyert &&
    Array(size).fill(0).map(() => Array(size).fill(0).map(() => " "))
</script>
<h1>Amőba</h1>
<input type="range" bind:value={ size } min=5 max=15>
{#if !nyert}
    <table>
    {#each t as row, y}
        <tr>
            {#each row as cell, x}
                <td on:click={() => {               
                    cell = next = next == "X" ? "O" : "X";
                    [[1, 0], [0, 1], [1, 1], [1, -1]].forEach(ir => {
                        var n = 0, xp = x, yp = y, [ix, iy] = ir
                        do n++, xp += ix, yp += iy 
                        while(t[yp] && t[yp][xp] == next) 
                        xp = x, yp = y
                        do n++, xp -= ix, yp -= iy
                        while(t[yp] && t[yp][xp] == next)
                        if (n > 5) nyert = true
                    })
                }} class={ cell }>{ cell }</td>
            {/each}
        </tr>
    {/each}
    </table>
{:else}
    <div>
    <table>
        <tr><th>NYERT</th></tr>
        <tr><td class={ next }>{ next }</td></tr>
    </table>
    </div>
    <hr>
    <button on:click={() => nyert = false}>Új játék</button>
{/if}
