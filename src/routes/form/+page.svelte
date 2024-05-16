<script>
	import { onMount } from "svelte";
    import sha256 from 'crypto-js/sha256'
    var form, fd = new FormData(form), sent = false
    const reg = () => fd = new FormData(form)
    const send = () => {
        fd = new FormData(form)
        sent = {}
        fd.forEach((v, k) => sent[k] = v)
        sent.password = sha256(sent.password).toString()
    }
    onMount(reg)
</script>
<h1>Regisztráció</h1>
<hr>
{#if sent}
    <h2>Küldéshez adatok:</h2>
    <div class="fdc">
        <div class="g1">Felhasználónév</div>
        <div class="g2">{sent.username}</div>
        <div class="g1">Név</div>
        <div class="g2">{sent.name}</div>
        <div class="g1">Születési dátum</div>
        <div class="g2">{sent.date_of_birth}</div>
        <div class="g1">Jelszó ujjlenyomata</div>
        <div class="g2">{sent.password}</div>
    </div>
{/if}
<form bind:this={form} on:submit={send} on:change={reg} class={sent ? 'h' : 'v'}
    action="javascript:void(0)">
    <label for="username">Felhasználónév</label>
    <input type="text" name="username">
    <br>
    <label for="name">Név</label>
    <input type="text" name="name">
    <br>
    <label for="date_of_birth">Születési dátum</label>
    <input type="date" name="date_of_birth">
    <br>
    <label for="password">Jelszó</label>
    <input type="password" name="password">
    <br>
    <input type="submit" value="Elküld">
</form>
<div class={sent ? 'h' : 'v'}>
    <hr>
    <br>
    <h2>Ürlapon lévő adatok:</h2>
    <div class="fdc">
    {#each fd as x}
        <div class="g1">{x[0]}:</div>
        <div class="g2">{x[1]}</div>
    {/each}
    </div>
</div>
<style>
    h2 {
        text-shadow: 1px 1px 3px gray;
        font-size: 17px;
        color: rgb(16, 16, 153);
    }
    .h {
        display: none;
    }
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
        white-space: nowrap;
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
        background-color: rgb(233, 241, 188);
        padding-left: 20px;
        padding-right: 20px;
    }
</style>