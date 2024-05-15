<script>
	import { onMount } from "svelte";
    var form, fd = new FormData(form)
    const reg = () => fd = new FormData(form)
    const send = () => {
        fd = new FormData(form)
        var o = {}
        fd.forEach((v, k) => o[k] = v)
        console.log(o)
    }
    onMount(reg)
</script>
<h1>Regisztráció</h1>
<hr>
<form bind:this={form} on:submit={send} on:change={reg}>
    <label for="username">Felhasználónév</label>
    <input type="text" name="username">
    <br>
    <label for="username">Név</label>
    <input type="text" name="name">
    <br>
    <label for="c1">Betűszín</label>
    <input type="color" name="c1">
    <br>
    <label for="c2">Háttérszín</label>
    <input type="color" name="c2" value="#fef2f0">
    <br>
    <label for="date_of_birth">Születési dátum</label>
    <input type="date" name="date_of_birth">
    <br>
    <label for="password">Jelszó</label>
    <input type="password" name="password">
    <br>
    <input type="submit" value="Elküld">
</form>
<hr>
<div class="fdc">
{#each fd as x}
    <div class="g1">{x[0]}:</div>
    {#if x[0]=="name"}
    <div class="g2" 
    style="background-color: {fd.get('c1')}; color: {fd.get('c2')};"
    >{x[1]}</div>
    {:else}
    <div class="g2">{x[1]}</div>
    {/if}
{/each}
</div>
<style>
    form, .fdc {
        border: solid 2px brown;
        display: inline-block;
        padding: 20px;
        border-radius: 10px;
        background-color: antiquewhite;
    }
    label {
        width: 120px;
        display: inline-block;
        text-align: right;
        padding-right: 10px;
    }
    input {
        margin: 10px 0;
        width: 130px;
    }
    .fdc {
        display: inline-grid;
        grid-template-columns: auto auto;
        padding: 10px;
    }
    .g1, .g2 {
        margin: 3px;
        padding: 6px;
        border-radius: 10px;
        box-shadow: 1px 1px 3px black;
    }
    .g1 {
        text-align: right;
        background-color: aquamarine;
        color: rgb(127, 23, 23);
        text-shadow: 1px 1px 3px gray;
        padding-left: 40px;
        padding-right: 20px;
    }
    .g2 {
        text-align: left;
        background-color: antiquewhite;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>