<script>
    export let text = '';
    export let imageUrl = '';
    export let href = '';
</script>

<div class="bttndiv">
{#if imageUrl != ''}
    <img class="bttnim" src={imageUrl} alt="asfdas"/>
{/if}
<a class="bttna" href={href}>{text}</a>
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
    .bttna{
        font-weight: bold;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 24px;
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
