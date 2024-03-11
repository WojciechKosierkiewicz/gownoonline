<script>
	import Gifbutton from "./gifbutton.svelte";
    import eTroll from "/smietnik/etroll.png";
    import { enhance } from "$app/forms";
	import SubmitButton from "./SubmitButton.svelte";

</script>
<div class="shoutbox_main">
    <div class="chat_window">
        <div class="history">
        </div> 
        <div >
            <form method="POST" class="actions" use:enhance>
                <input type="text" name="content"/>
                <SubmitButton text="Wyślij" smallMode={true}/>
            </form>
        </div>
    </div>
</div>

<style>
    :root{
        --background-color: #818181;
        --border-color: #c0c0c0;
    }
    :global([ref="sendBtn"]){
        height:24px;
        width: 64px !important;
    }
.shoutbox_main{
    width:100%;
    height:100%;
    display: flex;
}
.chat_window{
    flex-grow: 1;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 36px;
    gap:0;
}
.history{
    grid-row: 1;
    background-color: var(--background-color);
    height: auto;
}
.actions {
    display: flex;
    flex-direction: row;
    grid-row: 2;
}
.actions > input {
    width: 100%;
    border: 6px ridge var(--border-color);
    background-color: var(--background-color);
    color: white;
    font-weight: bold;
}
</style>
