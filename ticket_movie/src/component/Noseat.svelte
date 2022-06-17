<script>
    import { each } from "svelte/internal";
    $:ticketsno=0
</script>
<main>
    <div class="screen">Sceen</div>
    <div class="layout">
        {#each Array(40) as s,i}
                <div class="block" on:click={()=>{ticketsno+=1;}} class:active={s===1}></div>
        {/each}            
    </div>
</main>
<style>
    .active{
        background: green;
    }
    .screen{
        width: 30vw;
        display: grid;
        place-items: center;
        margin: 10vh 0vw 4vh 20vw;
        height: 4vh;
        font-family: "roboto";
        color: bisque;
        background: black;
    }
    .layout{
        width: 60vw;
        height: 40vh;
        margin-left: 5vw;
        display: grid;
        grid-template-columns: repeat(10,1fr);
    }
    .block{
        cursor: pointer;
        width: 3vw;
        height: 5vh;
        background: gainsboro;
    }
</style>