<template>
    <section id="content">
        <h1 class="form-title">{{ title }}</h1>

        <form action="" class="form-medium">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="form-input-name">
            </div>

            <div class="form-group">
                <label for="name">Lastname</label>
                <input type="text" name="lastname" id="form-input-lastname">
            </div>

            <div class="form-group">
                <label for="name">email</label>
                <input type="email" name="email" id="form-input-email">
            </div>
            
            <div class="form-group">
                <input type="submit" value="Send" class="btn btn-dark">
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data: () => ({
        title: 'Contact'
    })
}
</script>