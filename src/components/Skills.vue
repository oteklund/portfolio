<template>
  <div class="skills-container">
    <h3>skills and certificates</h3>
    <div class="skills-content">
      <section>
        <h5>language skills</h5>
        <ul>
          <li>Swedish: first language</li>
          <li>Finnish: first language</li>
          <li>English: fluent</li>
          <li>Norwegian: competent</li>
          <li>Danish: competent</li>
          <li>Icelandic: intermediate</li>
        </ul>
      </section>
      <section>
        <h5>professional</h5>
        <ul>
          <li>agile (professional scrum master)</li>
          <li>customer service experience</li>
        </ul>
      </section>
      <section>
        <h5>miscellaneous</h5>
        <ul>
          <li>digital audio workstation proficiency</li>
          <li>music production and performance</li>
          <li>Finnish drivers license (B)</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style lang="sass">
@use "../sass/_base"
.skills-container
  margin: 50px auto
  width: 100%
  max-width: 600px
  height: 100%
  h3
    text-align: right
    margin-bottom: 15px
  ul
    margin: 15px auto
  li
    margin-bottom: 15px
    font-family: base.$sans-serif
    color: base.$lightblue
@media screen and (max-width: 700px)
  .skills-container
    margin: 15px auto
@media screen and (max-height: 400px)
  .skills-container
    margin: 15px auto
  .skills-content
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 10px
    li
      list-style: none
</style>