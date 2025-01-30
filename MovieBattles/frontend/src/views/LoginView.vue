<template>
    <div class="container text-start">
        <form v-show="storeAuth.jwt == ''">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control border-success"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="email"
                />
                <div id="emailHelp" class="form-text">
                    We will never share your email with anyone else.
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >password</label
                >
                <input
                    type="password"
                    class="form-control border-success"
                    id="exampleInputPassword1"
                    v-model="password"
                />
            </div>
            <button
                type="submit"
                class="btn btn-success"
                @click.prevent="authUser"
            >
                Submit
            </button>
        </form>
    </div>

    <div v-show="storeAuth.jwt !== ''">
        <h2>bienvenido</h2>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>