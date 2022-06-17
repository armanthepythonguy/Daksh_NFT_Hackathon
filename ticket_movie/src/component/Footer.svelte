<script></script>
<main>
    <footer>
        <div class="div1">
            <p>cities</p>
            <ul>
                <li>Chennai</li>
                <li>Banglore</li>
                <li>Trichy</li>
                <li>Chennai</li>
            </ul>
        </div>
        <div class="div2">
            <p>Made by</p>
            <ul>
                <li>Subhro</li>
                <li>Arman</li>
                <li>Chidam</li>
                <li>Adbdul</li>
            </ul>
        </div>
    </footer>
</main>
<style>
    .div1{
        border-right: rgb(252, 189, 72) solid 3px;
    }
    .div1 p,.div2 p{
        text-align: center;
        color: rgb(190, 135, 35);
        font-family: "roboto";
        font-size: 1.5rem;
    }
    .div1 ul,.div2 ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-left: 3rem;
    }
    .div1 li,.div2 li{
        list-style-type: none;
        color: rgb(227, 176, 105);
        font-family: "robo";
        font-size: 2rem;
        font-weight: 600;
    }
    .div1,.div2{
        display: grid;
    }
    footer{
        height: 16vh;
        width: 100vw;
        background: black;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        color: red;
    }
</style>