<script>
  import Connect from "./component/Connect.svelte"
  import Home from "./component/Home.svelte"
  import Header from "./component/Header.svelte"
  import Footer from "./component/Footer.svelte"
  import Book from "./component/Book.svelte"
  let state=0;
</script>
<main>
  {#if state == 0}
    <Connect {state} on:statechange={()=>{state=1}}/>
  {:else}
    <Header/>  
    {#if state ==1}
        <Home {state} on:onstatechange={()=>{state=2}}/>
    {:else if state ==2}
        <Book/>
    {/if}
    <Footer/>
  {/if}
</main>

<style>

</style>
