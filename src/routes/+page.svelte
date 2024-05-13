<script>
    import {base} from "$app/paths";
    var link = "amoba"
    $: name = menu.filter(m => m.link == link)[0].name
    const menu = [
        {link: "amoba", name: "Amőba"},
        {link: "date_input", name: "Dátum input"},
        {link: "grid", name: "CSS GRID példa"}
    ]
    var ifr = {}
    setInterval(() => {
        if (ifr.style) {
            ifr.style.height = '1px'
            ifr.style.width = '500px'
            ifr.style.height = ifr.contentWindow.document.documentElement.scrollHeight + 'px'
            ifr.style.width = ifr.contentWindow.document.documentElement.scrollWidth + 'px'
        }
    }, 500)
</script>
<h1>Menü - Dávid óráján vendégségben</h1>
<hr>
<div class="c">
    <div class="pv">Példaprogram választása:</div>
    <select bind:value={link}>
    {#each menu as m}
        {#if link == m.link}
            <option selected value={m.link}>{m.name}</option>
        {:else}
            <option value={m.link}>{m.name}</option>
        {/if}
    {/each}
    </select>
    <a href="{base}/{link}" target="_blank">{name} megynyitása új lapon</a>
</div>
<hr>
<iframe bind:this={ifr} title="cc" class="cc" src="{base}/{link}" scrolling="no"></iframe>
<br>
<div class="ss">Dr. Németh Tamás</div>
<style>
    iframe {
        margin: auto;
        border-radius: 10px;
        border: solid 8px rgb(28, 76, 88);
        box-shadow: 1px 1px 4px black;
        display: block;
        width: 96%;
        height: 90%;
    }
    div.c {
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
    a { 
        all: unset;
        cursor: pointer;
        white-space: nowrap;
    }
    a, select, div.pv {
        border: solid 1px black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }
    div.pv {
        color: brown;
        background-color: rgb(234, 212, 184);
        display: inline-block;
        border: solid 1px rgb(121, 76, 76);
        box-shadow: 1px 1px 3px inset gray;
    }
    div.ss {
        color: rgb(161, 128, 86);
        text-shadow: 1px 1px 4px gray;
    }
    a {
        background-color: aquamarine;
        box-shadow: 1px 1px 3px black;
    }
    select {
        background-color: burlywood;
    }
    a:hover {
        background-color: rgb(245, 186, 118);
    }
    :global(body) {
        background-color: blanchedalmond;
    }
</style>