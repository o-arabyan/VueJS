<template>
    <div class="form-group">
        <label class="form-label" :for="id">
            <template v-if="required">
                {{ label }} <span class="form-required">*</span>
            </template>
            <template v-else>
                {{ label }}
            </template>
        </label>
        <div class="form-container">
            <img class="form-icon" v-if="icon" :src="require('../assets/images/svg/'+icon)" :alt="alt">
            <input class="form-input"
                   :class="{'form-input--error': error}"
                   :type="type"
                   :value="value"
                   @input="$emit('input', $event.target.value)"
                   :id="id"
                   :name="id"
                   :required="required"
                   v-if="!isSelect"
                   :placeholder="placeholder"
            />
            <select class="form-input" :id="id" :name="id" :value="value" @input="$emit('input', $event.target.value)" v-else>
                <option :value="item" v-for="item in dataSelect">{{ item }}</option>
            </select>
        </div>
        <span class="form-error" v-if="error"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "textInput",
        props: {
            required: Boolean,
            error: Boolean,
            value: String,
            label: String,
            type: String,
            icon: String,
            id: String,
            alt: String,
            placeholder: String,
            isSelect: Boolean,
            dataSelect: [Array, Object]
        },
    }
</script>

<style>

</style>