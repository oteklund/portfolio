<template>
  <article class="education-container">
    <h3>education</h3>
    <div class="education-content">
        <section>
          <h4>Full stack Javascript bootcamp</h4>
          <h5>2019–2020, Academic Work</h5>
          <p>A four-month intensive training programme aimed at ambitious and driven individuals with the right skills to begin a new career as a full stack developer. The education follows a pedagogic model where high speed practical learning is put at the forefront, giving students a wide array of programming skills to be ready to contribute as soon as the training is completed.</p>
          <p>The focus of the programme rested heavily on Javascript, using Node.js in the backend and vanilla JS on the frontend, gradually progressing to more and more complex framework-based projects over the course of the programme.</p>
        </section>
        <section>
          <h4>BA in Scandinavian Languages</h4>
          <h5>2012–2019, University of Helsinki</h5>
          <p>
            A varied and broad education in the study of Nordic languages and their properties. Throughout my studies at the University I gained insight in the structure, usage and purpose of natural language. Furthermore, I gained a good understanding of what makes up languages in general and how to apply this knowledge outside the realm of linguistics.
          </p>
          <p>
            While translation and natural languages made up the bulk of my studies at the time, I also found an interest for programming during the later part of my studies and took a handful of courses in computer science. Additionally, my University studies greatly improved my information literacy and critical thinking skills
          </p>
        </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style lang="sass">
@use "../sass/_base"
.education-container
  max-width: 600px
  max-height: 100%
  margin: 15px auto 50px auto
  text-align: right
  .education-content
    width: 100%
    margin-top: 15px
    text-align: left
    font-family: base.$sans-serif
    h4
      margin-top: 30px
    h5
      color: base.$pink
      margin-bottom: 10px
    p
      margin: 15px auto
@media screen and (max-height: 700px)
  .education-container
    margin: 15px auto
</style>