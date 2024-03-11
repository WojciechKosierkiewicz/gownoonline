
<script lang="ts">
    // @ts-nocheck
    export let text = '';
    export let imageUrl = '';
    export let smallMode = false;
    export let ref = null;
</script>

<div {ref} class="bttndiv">
{#if imageUrl != ''}
    <img class={smallMode ? "bttnim_small" : "bttnim"} src={imageUrl} alt="asfdas"/>
{/if}
<button class="bttna" type="submit">{text}</button>
</div>

<style>
    .bttndiv{
        display: flex;
        align-items: center;
        border: 6px ridge #c0c0c0;
        background-color: #818181;
        width: fit-content;
        animation: blink 1s infinite;
    }
    .bttnim{
        width: 40px;
        height: 40px;
    }
    .bttnim_small{
        width:16px;
        height:16px;
    }
    .bttna{
        font-weight: bold;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 16px;
        text-decoration: none;
        color: black;
    }
    @keyframes
    blink {
        0% {
        background-color: #c0c0c0;
        }
        50% {
        background-color: #818181;
        }
        100% {
        background-color: #c0c0c0;
        }
    }
</style>