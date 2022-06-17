<script>
    import {createEventDispatcher} from "svelte"
    let dispatch=createEventDispatcher()
    $: date =['18 Sat','19 Sun','20 Mon','21 Tue','22 Wed']
    $: screen=[{screen:1,time:'11:00 AM'},{screen:1,time:'1:00 PM'},{screen:1,time:'3:00 PM'},{screen:2,time:'9:00 AM'},{screen:2,time:'11:00 PM'},{screen:2,time:'4:00 PM'},{screen:2,time:'8:00 PM'},{screen:3,time:'10:00 PM'},{screen:3,time:'12:00 PM'},{screen:3,time:'5:00 PM'}]
    $: chosen={date:'',time:'',screen:0}
    export let step;
    const proceed = ()=>{
        if(chosen.date === '' || chosen.time ==='' || chosen.screen ===0){
            console.log("fill this first")
            console.log(chosen.time)
            console.log(chosen.date)
            console.log(chosen.screen)
        }
        else{
            console.log(chosen.time)
            console.log(chosen.date)
            console.log(chosen.screen)
            dispatch('dis',1)
        }
    }
</script>
<main>
    <div class="p">Show time selection</div>
    <div class="date">
        {#each date as d}
            <div class="choosen" on:click={()=>{chosen.date=d}} class:active={chosen.date===d}>{d}</div>
        {/each}
    </div>
    <div class="time">
        <div class="screen" style="margin-top: 5vh;">Screen 1</div>
        <div class="s">
        {#each screen as s,i}
            {#if s.screen===1}
                        <div class="choosen1" on:click={()=>{chosen.time=s.time;chosen.screen=1}} class:active={chosen.time===s.time}>{s.time}</div>
            {/if}
        {/each}</div>
        <div class="screen">Screen 2</div>
        <div class="s">
        {#each screen as s,i}
            {#if s.screen===2}
                        <div class="choosen1" on:click={()=>{chosen.time=s.time;chosen.screen=2}} class:active={chosen.time===s.time}>{s.time}</div>
            {/if}
        {/each}</div>
        <div class="screen">Screen 3</div>
        <div class="s">
        {#each screen as s,i}
            {#if s.screen===3}
                        <div class="choosen1" on:click={()=>{chosen.time=s.time;chosen.screen=3}} class:active={chosen.time===s.time}>{s.time}</div>
            {/if}
        {/each}</div>
    </div>
    <div class="proceed" on:click={proceed}>
        Next->
    </div>
</main>
<style>
    .proceed{
        background-color: black;
        color: wheat;
        font-family: "roboto";
        margin-left: 5vw;
        margin-top: 2vh;
        text-align: center;
        font-size: 2rem;
        width: 10vw;
        border-radius: 17px;
        cursor: pointer;
    }
    .s{
        margin-left: 5vw;
        display: grid;
        grid-template-columns: repeat(10,15vw);
    }
    .screen{
        font-family: "robo";
        font-size: 2rem;
        margin: 2vh 0vw 1vh 10vh;
    }
    .choosen{
        font-family: "roboto";
        padding: 4vh 0vh;
        text-align: center ;
        background: gainsboro;
        border: black solid 2px;
        cursor: pointer;
    }
    .choosen1{
        display: grid;
        place-items: center;
        width: 10vw;
        height: 5vh;
        font-family: "roboto";
        background: gainsboro;
        border: black solid 2px;
        cursor: pointer;
        border-radius: 17px;
    }
    .active{
        background: green;
    }
    .date{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 8vw;
        width: 90vw;
        margin: 0% 5vw;
    }
    .p{
        color: rgb(96, 48, 0);
        font-family: "roboto";
        font-size: 2rem;
        text-align: center;
        margin-bottom: 4vh;
    }
</style>