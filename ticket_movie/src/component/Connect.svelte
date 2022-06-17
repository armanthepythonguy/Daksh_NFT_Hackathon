<script>
    import { createEventDispatcher } from 'svelte';
    export let state;
    let dispatch=createEventDispatcher()
    const statechange = ()=>{
        dispatch('statechange',1)
        state=1
    }
</script>
<main>
    <div class="img">
        <img src="src/assets/scene1.png" alt="logo">
    </div>
    <div class="text">Movieso</div>
    <div class="black"></div>
    <div class="rig"></div>
    <div class="btncon"><a href="#" on:click={statechange}>Connect Wallet</a></div>
    <div class="btn"><a href="#">Connect Wallet as Allocator</a></div>
</main>
<style>
.btn a{
    position: absolute;
    top: 52vh;
    text-decoration: none;
    right: 14.7vw;
    color: aliceblue;
}
.btn a:hover{
    color: rgb(122, 255, 255);
    text-decoration:underline;
}
.btncon{
    cursor: pointer;
    position: absolute;
    top: 45vh;
    right: 15vw;
    background: rgb(237, 188, 97);
    font-family: "roboto";
    border-radius: 17px;
    border: white solid 2px;
    padding: 1% 1.5% 1% 1.5%;
}
.btncon a{
    text-decoration: none;
    color: black;
}
.img{
    height: 100vh;
    width:60vw;
    overflow: hidden;
}
.text{
    position: absolute;
    font-family: "Samarkan";
    color: black;
    font-size: 3.5rem;
    top: 50vh;
    left: 25vw;
}
.black{
    position: absolute;
    top: 0px;
    width: 60vw;
    height: 100vh;
    background: rgb(0, 0, 0,0.7);
}
.rig{
    position: absolute;
    top: 0%;
    right: 0%;
    background: black;
    height: 100vh;
    width: 40vw;
}
</style>