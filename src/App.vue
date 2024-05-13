<script>

export default{
  data() {
    return{
      menu: [
        {
          name: "home",
          title: "HOME"
        },
        {
          name: "about",
          title: "ABOUT US"
        },
        {
          name: "contacts",
          title: "CONTACTS"
        }
      ]
    }
  }
}
</script>

<template>
    <ul>
      <li v-for="item in menu">
        <router-link :to="{name:item.name}">{{ item.title }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
</template>

<style>

div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}

</style>
