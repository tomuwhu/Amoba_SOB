<script>
    var n = 42;
</script>
<h1>Grid Példa</h1>
<hr>
<input type="range" bind:value={n} min=10 max=121>
<div class="c">
    {#each Array(n).fill() as i, j}
        <div on:click={e => e.target.style.visibility = 'hidden'}>{j + 1}</div>
    {/each}
</div>
<style>
div.c {
    display: inline-grid;
    grid-template-columns: repeat(10, auto);
    justify-items: center;
    padding: 10px;
}
div.c div {
    margin: 3px;
    border: 1px solid black;
    padding: 3px;
    text-align: center;
    background-color: burlywood;
    box-shadow: 1px 1px 3px black;
    color: rgb(37, 72, 99);
    text-shadow: 1px 1px 4px gray;
    border-radius: 5px;
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    user-select: none;
    cursor: pointer;
    display: inline-block;
    width: 28px;
}
</style>