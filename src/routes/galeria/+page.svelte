<script>
    import rogacz from '/smietnik/rogacz-piwo.gif';
</script>

{#each new Array(400) as _, i}
    <img class="piwo" src={rogacz} alt="asfdas"/>
{/each}

<style>
    .piwo{
        height: 100px;
        animation: rotate 11s infinite;
    }
    @keyframes rotate{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>