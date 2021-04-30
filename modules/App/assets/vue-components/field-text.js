
export default {

    _meta: {
        label: 'Text',
        info: 'Simple text',
        icon: 'settings:assets/icons/text.svg'
    },

    data() {
        return {
            val: this.modelValue
        }
    },

    props: {
        modelValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        showCount: {
            type: Boolean,
            default: true
        },
        height: {
            type: String,
            default: '150px'
        },
        minlength: {
            type: Number
        },
        maxlength: {
            type: Number
        },
        multiline: {
            type: Boolean,
            default: false
        }
    },

    watch: {
        modelValue() {
            this.val = this.modelValue;
            this.update();
        }
    },

    computed: {
        countIndicator() {
            return Math.abs((this.maxlength || 0) - (this.val || '').length);;
        }
    },

    template: /*html*/`
        <div field="text">
            <input type="text" class="kiss-input kiss-width-1-1" v-model="val" @input="update" :placeholder="placeholder" :maxlength="maxlength" :minlength="minlength" v-if="!multiline">
            <textarea class="kiss-textarea kiss-input kiss-width-1-1" v-model="val" @input="update" :placeholder="placeholder" :maxlength="maxlength" :minlength="minlength" :style="{height}" v-if="multiline"></textarea>
            <div class="kiss-margin-xsmall-top" v-if="showCount">
                <span class="kiss-badge kiss-badge-outline kiss-color-muted">{{countIndicator}}</span>
            </div>
        </div>
    `,

    methods: {
        update() {
            this.$emit('update:modelValue', this.val)
        }
    }
}