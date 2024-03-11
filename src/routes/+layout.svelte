<script>
	import Gifbutton from '$components/gifbutton.svelte';
    import eart from '/smietnik/earth.gif';
    import spinmak from '/smietnik/spinmask.gif';
    import phot from '/smietnik/photo.gif'
</script>

		<nav>
			<Gifbutton imageUrl={eart} text="Home" href="/" />
			<Gifbutton imageUrl={spinmak} text="Onas" href="/onas" />
			<Gifbutton imageUrl={phot} text="Galeria" href="/galeria"/>
		</nav>

<div class="tlo dojebane_tlo">
	<div>
		<slot />
	</div>
</div>

<style>
	nav {
		background-color: #808080;
		display: inline-flex;
		width: 100%;
        height: 50px;
	}
	.dojebane_tlo {
		background-image: url('/smietnik/background.gif');
		background-repeat: repeat;
	}
	.dojebane_tlo > div {
	animation: rotate 10s linear infinite;
	}
    .tlo{
        /* position: fixed; */
        overflow: auto;
        background-size: 100%;
        width: 100%;
        height: 100%;
        animation: tloanim 10s linear infinite;
    }

    @keyframes tloanim {
        0% {
            background-position: 0px;
        }
        100% {
            background-position: 1000px;
        }

    }
	@keyframes rotate {
		25% {
			transform: rotate(1deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-1deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
