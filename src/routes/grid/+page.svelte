<script>

</script>
<h1>Grid Példa</h1>
<hr>
<div class="c">
    {#each Array(100).fill() as i, j}
        <div>{j}</div>
    {/each}
</div>
<style>
div.c {
    display: inline-grid;
    grid-template-columns: repeat(10, auto);
    justify-items: center;
}
div.c div {
    margin: 10px;
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    background-color: burlywood;
    box-shadow: 1px 1px 3px black;
    color: rgb(121, 76, 76);
    text-shadow: 1px 1px 4px gray;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    user-select: none;
    cursor: pointer;
    display: inline-block;
    width: 50px;
}
</style>