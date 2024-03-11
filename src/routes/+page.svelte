<script>
    import MainSection from '$components/MainSection.svelte';
    import piwoooooo from '/smietnik/rogacz-piwo.gif';
    import GownoHeader from '$components/GownoHeader.svelte';
    import W from '/smietnik/w.gif';
	import Muza from '$components/Muza.svelte';
	import Shoutbox from '$components/Shoutbox.svelte';
</script>
<GownoHeader/>


<div class="shit_page_content">
    <div class="main_page_div">
        <MainSection sectionName="O nas" ref="about_us">
            <h1 class="intro_text">debilen stronen internetowen</h1>
        </MainSection>

        <MainSection sectionName=":DDDDDDD" ref="w33d">
            <img src={W} class="w33d" alt="wddddddddddddddd"/>
        </MainSection>

        <MainSection sectionName="Nasi sponsorzy" ref="piwo">
            <p>powered by piwoooooooooooooooooooooooooo</p>
            <img src={piwoooooo} width="50px" height="50px" alt="piwoooooooooooooooooooooooooooooooooooooooooooooo"/>
        </MainSection>

        <MainSection sectionName="eeeee" ref="info">
            <p>Wpisz sie kurwa na listę gości <a href="/">tutaj</a></p>
        </MainSection>

        <MainSection sectionName="Możesz podrzeć pizde tutaj :DD" ref="darciepizdypudlo">
            <Shoutbox/>
        </MainSection>

        <MainSection sectionName="Dobra muza d-_-b" ref="muza">
            <Muza/>
        </MainSection>
        
    </div>    
</div>


<style>
    h1,p {
        margin:0;
    }
    .main_page_div{
        display: grid;
        grid-template-columns: repeat(4, calc(80vw/4));
        grid-template-rows: repeat(5, calc(75vh/5));
        gap: 1rem;
    }
    .w33d{
        width:100%;
        height:100%;
        object-fit: fill;
       object-position: center;
    }
    .intro_text{
        text-align: center;
    }
    :global([ref="about_us"]) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row: 1;
    }
    :global([ref="w33d"]){
        grid-column: 1;
        grid-row: 2;
    }
    :global([ref="piwo"]){
        grid-column: 1;
        grid-row:4;
    }
    :global([ref="muza"]){
        grid-column: 2 / span 2;
        grid-row: 2 / span 3;
    }
    :global([ref="darciepizdypudlo"]){
        grid-column:4;
        grid-row: 2 / span 3;   
    }
</style>