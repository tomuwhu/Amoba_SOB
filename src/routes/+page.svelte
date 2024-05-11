<script>
    var size = 12, win = false, next = "X"
    $: t = !win &&
    Array(size).fill().map(() => Array(size).fill().map(() => " "))
    const valt = X => X == "X" ? "O" : "X"
</script>
<h1>Amőba</h1>
<input type="range" bind:value={ size } min=5 max=15>
{#if !win}
    <table>
        <tr><th>Következik:</th></tr>
        <tr><td class={ valt(next) }>{ valt(next) }</td></tr>
    </table>
    <hr>
    <table>
    {#each t as row, y}
        <tr>
            {#each row as cell, x}
                <td on:click={() => {               
                    cell = next = valt(next),
                    [[1, 0], [0, 1], [1, 1], [1, -1]].forEach(ir => {
                        var n = 0, xp = x, yp = y, [ix, iy] = ir
                        do n++, xp += ix, yp += iy 
                        while(t[yp] && t[yp][xp] == next) 
                        xp = x, yp = y
                        do n++, xp -= ix, yp -= iy
                        while(t[yp] && t[yp][xp] == next)
                        if (n > 5) win = true
                    })
                }} class={ cell }>{ cell }</td>
            {/each}
        </tr>
    {/each}
    </table>
{:else}
    <div>
    <table>
        <tr><th>Nyert:</th></tr>
        <tr><td class={ next }>{ next }</td></tr>
    </table>
    </div>
    <hr>
    <button on:click={() => win = false}>Új játék</button>
{/if}
