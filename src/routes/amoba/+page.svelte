<script>
    var size = 12, win = !1, OX = "X"
    $: t = !win &&
    Array(size).fill().map(() => Array(size).fill().map(() => " "))
    const O = X => X == "O" ? "X" : "O"
</script>
<h1>Amőba</h1>
<input type="range" bind:value={ size } min=5 max=15>
{#if !win}
    <table>
        <tr><th>Következik:</th></tr>
        <tr><td class={ O(OX) }>{ O(OX) }</td></tr>
    </table>
    <hr>
    <table>
    {#each t as row, y}
        <tr>
            {#each row as cell, x}
                <td on:click={() => {               
                    cell = OX = O(OX),
                    [[1, 0], [0, 1], [1, 1], [1, -1]].forEach(ir => {
                        let n = 0, xp = x, yp = y, [ix, iy] = ir
                        do n++, xp += ix, yp += iy 
                        while(t[yp] && t[yp][xp] == OX) 
                        xp = x, yp = y
                        do n++, xp -= ix, yp -= iy
                        while(t[yp] && t[yp][xp] == OX)
                        win = n > 5 ? !0 : win
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
        <tr><td class={ OX }>{ OX }</td></tr>
    </table>
    </div>
    <hr>
    <button on:click={() => win = !1}>Új játék</button>
{/if}
<style>
    input {
        width: 300px;
    }
</style>