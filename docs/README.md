---

hero_text: "<strong>Solar Eclipse</strong>"

---
<div class="heroWrapper">
    <Hero :text="$page.frontmatter.hero_text" />
</div>

<div class="bg-gray-400 rounded p-6 rounded m-12">
    <p class="text-center m-4 text-xl">Begins - 11:27</p>
    <p class="text-center m-4 text-xl">Maximum - 13:23</p>
    <p class="text-center m-4 text-xl">Ends - 15:18</p>
</div>

<article class="bg-gray-400 rounded m-12 p-6">
    <h2 class="text-2xl text-center m-6 font-bold tracking-wider">Livestream</h2>
    <iframe class="mx-auto" width="100%" height="auto" src="https://www.youtube.com/embed/4foL-OEnLpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</article>
