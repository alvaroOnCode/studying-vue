<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>What to do</h3>
      <a href="#" class="btn">Create post</a>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Search</h3>
      <p>Find any post</p>
      <form action="#">
        <input type="text" name="search" id="input-search-text" />
        <input type="submit" value="Search!" class="btn btn-light" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>