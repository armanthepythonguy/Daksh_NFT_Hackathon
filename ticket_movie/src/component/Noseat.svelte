<script>
    import { each } from "svelte/internal";
    $:ticketsno=0
    const length = 40;
    const filledArray = Array(length).fill(0);
    export let chosen={date:'',time:'',screen:0}
</script>
<main>
    <div class="screen">Sceen</div>
    <div class="layout">
        {#each filledArray as a,i}
                <div class="block" on:click={()=>{if (a==0) {a=1;ticketsno+=1;}else{a=0;ticketsno-=1;}}} class:active={a===1}></div>
        {/each}            
    </div>
    <div class="details">
        No of Seats :{ticketsno}
    </div>
</main>
<style>
    .details{
        position: absolute;
        top: 15vh;
        left: 60vw;
        width: 40vw;
        height: 75vh;
        display: grid;
        place-items: center;
        font-family: "roboto";
        font-size: 2rem;
    }
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
    .active{
        background: green;
    }
</style>