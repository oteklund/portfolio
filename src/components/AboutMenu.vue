<template>
  <div class="about-menu-container" >
    <div class="about-menu about-hidden" v-on:click="this.openAboutMenu">
      <p class="tab-text">topics</p>
      <ul class="projects-list">
        <li
          v-for="topic in this.topics"
          v-on:click="$emit('select-content', topic)"
          v-bind:key="topic.id"
        >{{topic.name}}</li>
      </ul>
    </div>
    <div class="about-burger" v-on:click="this.openAboutMenu">
      <div class="about-burger-line-1"></div>
      <div class="about-burger-line-2"></div>
      <div class="about-burger-line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMenu",
  data() {
    return {
      aboutMenuIsActive: false,
      topics: [
        {
          name: "education",
          id: 1,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab beatae quos est cumque laboriosam iusto fugiat sit vitae accusantium suscipit tempora ad iure, rem, eligendi provident ducimus veniam harum neque voluptas! Adipisci eligendi ipsam illum suscipit harum officiis quo, numquam, cumque nostrum debitis quaerat, hic repudiandae libero cum ad. Odio enim maxime quia? Officia id aut neque amet animi sapiente facilis repellat voluptas cum minima culpa nulla quos earum quo assumenda dignissimos molestiae, delectus distinctio ab ad veritatis quas beatae quasi eaque! Fuga repellat temporibus dolorum porro velit quam. Ipsam dolore, numquam vero laboriosam mollitia eaque ea est amet nihil beatae quae iure ipsum neque fuga! Quibusdam explicabo ea consequuntur expedita quae reprehenderit mollitia, fugiat quam impedit officia in blanditiis atque quidem magni incidunt nulla illum tempora obcaecati est officiis voluptate deleniti corporis nobis vero. Vel odio, asperiores non eligendi nihil autem quas rem nesciunt ut provident reprehenderit maxime facilis sapiente perspiciatis, perferendis voluptate culpa dignissimos nulla cumque iste officiis minima, ex temporibus dicta! Suscipit, sapiente cum. Tempore architecto dolore necessitatibus, modi numquam, nam quia magni natus, omnis deleniti laboriosam atque similique voluptatum. Aut adipisci laborum error impedit quaerat saepe repellendus, sapiente omnis dolor excepturi fuga tempore, quisquam esse."
        },
        {
          name: "tech stack",
          id: 2,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab beatae quos est cumque laboriosam iusto fugiat sit vitae accusantium suscipit tempora ad iure, rem, eligendi provident ducimus veniam harum neque voluptas! Adipisci eligendi ipsam illum suscipit harum officiis quo, numquam, cumque nostrum debitis quaerat, hic repudiandae libero cum ad. Odio enim maxime quia? Officia id aut neque amet animi sapiente facilis repellat voluptas cum minima culpa nulla quos earum quo assumenda dignissimos molestiae, delectus distinctio ab ad veritatis quas beatae quasi eaque! Fuga repellat temporibus dolorum porro velit quam. Ipsam dolore, numquam vero laboriosam mollitia eaque ea est amet nihil beatae quae iure ipsum neque fuga! Quibusdam explicabo ea consequuntur expedita quae reprehenderit mollitia, fugiat quam impedit officia in blanditiis atque quidem magni incidunt nulla illum tempora obcaecati est officiis voluptate deleniti corporis nobis vero. Vel odio, asperiores non eligendi nihil autem quas rem nesciunt ut provident reprehenderit maxime facilis sapiente perspiciatis, perferendis voluptate culpa dignissimos nulla cumque iste officiis minima, ex temporibus dicta! Suscipit, sapiente cum. Tempore architecto dolore necessitatibus, modi numquam, nam quia magni natus, omnis deleniti laboriosam atque similique voluptatum. Aut adipisci laborum error impedit quaerat saepe repellendus, sapiente omnis dolor excepturi fuga tempore, quisquam esse."
        },
        {
          name: "work experience",
          id: 3,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab beatae quos est cumque laboriosam iusto fugiat sit vitae accusantium suscipit tempora ad iure, rem, eligendi provident ducimus veniam harum neque voluptas! Adipisci eligendi ipsam illum suscipit harum officiis quo, numquam, cumque nostrum debitis quaerat, hic repudiandae libero cum ad. Odio enim maxime quia? Officia id aut neque amet animi sapiente facilis repellat voluptas cum minima culpa nulla quos earum quo assumenda dignissimos molestiae, delectus distinctio ab ad veritatis quas beatae quasi eaque! Fuga repellat temporibus dolorum porro velit quam. Ipsam dolore, numquam vero laboriosam mollitia eaque ea est amet nihil beatae quae iure ipsum neque fuga! Quibusdam explicabo ea consequuntur expedita quae reprehenderit mollitia, fugiat quam impedit officia in blanditiis atque quidem magni incidunt nulla illum tempora obcaecati est officiis voluptate deleniti corporis nobis vero. Vel odio, asperiores non eligendi nihil autem quas rem nesciunt ut provident reprehenderit maxime facilis sapiente perspiciatis, perferendis voluptate culpa dignissimos nulla cumque iste officiis minima, ex temporibus dicta! Suscipit, sapiente cum. Tempore architecto dolore necessitatibus, modi numquam, nam quia magni natus, omnis deleniti laboriosam atque similique voluptatum. Aut adipisci laborum error impedit quaerat saepe repellendus, sapiente omnis dolor excepturi fuga tempore, quisquam esse."
        },
        {
          name: "personality",
          id: 4,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab beatae quos est cumque laboriosam iusto fugiat sit vitae accusantium suscipit tempora ad iure, rem, eligendi provident ducimus veniam harum neque voluptas! Adipisci eligendi ipsam illum suscipit harum officiis quo, numquam, cumque nostrum debitis quaerat, hic repudiandae libero cum ad. Odio enim maxime quia? Officia id aut neque amet animi sapiente facilis repellat voluptas cum minima culpa nulla quos earum quo assumenda dignissimos molestiae, delectus distinctio ab ad veritatis quas beatae quasi eaque! Fuga repellat temporibus dolorum porro velit quam. Ipsam dolore, numquam vero laboriosam mollitia eaque ea est amet nihil beatae quae iure ipsum neque fuga! Quibusdam explicabo ea consequuntur expedita quae reprehenderit mollitia, fugiat quam impedit officia in blanditiis atque quidem magni incidunt nulla illum tempora obcaecati est officiis voluptate deleniti corporis nobis vero. Vel odio, asperiores non eligendi nihil autem quas rem nesciunt ut provident reprehenderit maxime facilis sapiente perspiciatis, perferendis voluptate culpa dignissimos nulla cumque iste officiis minima, ex temporibus dicta! Suscipit, sapiente cum. Tempore architecto dolore necessitatibus, modi numquam, nam quia magni natus, omnis deleniti laboriosam atque similique voluptatum. Aut adipisci laborum error impedit quaerat saepe repellendus, sapiente omnis dolor excepturi fuga tempore, quisquam esse."
        }
      ]
    };
  },
  methods: {
    openAboutMenu() {
      const menu = document.querySelector(".about-menu")
      this.aboutMenuIsActive = !this.aboutMenuIsActive
      if (this.aboutMenuIsActive) {
        menu.classList.remove("about-hidden")
      } else {
        menu.classList.add("about-hidden")
      }
    },
  }
};
</script>

<style lang="sass">
@use "../sass/base"
.about-menu-container
  position: absolute
  height: 100vh
  width: 300px
  max-width: 70%
  left: 0
  z-index: 4
.tab-text
  font-weight: bold
  font-size: 20px
  letter-spacing: 0
  color: base.$lightpink
  position: absolute
  right: -35px
  top: 50%
  transform: rotate(90deg)
  font-family: base.$sans-serif
  text-shadow: 4px 4px 6px base.$purple
.about-menu
  padding: 10px
  transform: translateX(0%)
  height: 100%
  width: 100%
  background: linear-gradient(to bottom, transparentize(base.$pink, 0.4 ), transparentize(base.$violet, 0.4 ))
  top: 0px
  transition: 0.3s
  // &:hover
  //   transform: translateX(0%)
.about-hidden
    transform: translateX(-90%)
.projects-list
  margin: 50px 25px
  width: 100%
  font-family: base.$sans-serif
  color: base.$lightblue
  li
    margin: 15px
    padding: 15px
    cursor: pointer
    &:hover
      filter: drop-shadow(1px 0px 2px white)
.about-burger
  cursor: pointer
  position: absolute
  padding: 7px 15px
  border-radius: 50%
  display: none
  left: 15px
  top: 15px
  background: base.$pink
.about-burger div
  border-radius: 50%
  width: 3px
  height: 3px
  background: base.$lightpurple
  margin: 4px
@media screen and (max-width: 800px)
  .about-menu
    background: linear-gradient(to bottom, transparentize(base.$pink, 0.05 ), transparentize(base.$violet, 0.05 ))
@media screen and (max-width: 700px)
  .about-menu-container
    max-width: 100%
    z-index: 2
  .about-hidden
    transform: translateX(-100%)
  .tab-text
    display: none
  .about-burger
    display: block 
</style>