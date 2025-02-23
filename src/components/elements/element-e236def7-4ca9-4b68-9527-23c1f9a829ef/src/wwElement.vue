<template>
    <div class="ww-countdown">
        <div v-if="!expired && !isEditingExpired && content.date.length" class="countdown">
            <wwElement v-bind="content.days" :ww-props="{ text: days }" />
            <wwLayout v-if="content.units" path="unitDays" direction="column" />
            <wwLayout v-if="content.separator" path="separatorLayouts" direction="column" />
            <wwElement v-bind="content.hours" :ww-props="{ text: hours }" />
            <wwLayout v-if="content.units" path="unitHours" direction="column" />
            <wwLayout v-if="content.separator" path="separatorLayouts" direction="column" />
            <wwElement v-bind="content.minutes" :ww-props="{ text: minutes }" />
            <wwLayout v-if="content.units" path="unitMinutes" direction="column" />
            <wwLayout v-if="content.separator" path="separatorLayouts" direction="column" />
            <wwElement v-bind="content.seconds" :ww-props="{ text: seconds }" />
            <wwLayout v-if="content.units" path="unitSeconds" direction="column" />
        </div>
        <div v-else-if="expired || isEditingExpired" class="expired">
            <wwLayout class="expired-layout" path="expiredLayout" direction="column" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
    data() {
        return {
            interval: null,
            days: '8',
            hours: '12',
            minutes: '08',
            seconds: '42',
            expired: false,
            isEditingExpired: false,
            distance: 0,
        };
    },
    computed: {
        isEditing() {
            /* wwFront:start */
            // eslint-disable-next-line no-unreachable
            return false;
            /* wwFront:end */
        },
    },
    watch: {
        'content.date'() {
            if (this.interval) clearInterval(this.interval);
            this.updateCountdown();
            this.interval = setInterval(() => {
                this.updateCountdown();
            }, 1000);
        },
    },
    mounted() {
        this.updateCountdown();
        this.interval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    },
    beforeUnmount() {
        if (this.interval) clearInterval(this.interval);
        this.interval = null;
    },
    methods: {
        updateCountdown() {
            this.expired = false;
            const now = new Date().getTime();
            const countdown = new Date(this.content.date).getTime();
            this.distance = countdown - now;
            this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24)).toString();
            this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
            this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
            this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000).toString();

            if (this.distance < 0) {
                clearInterval(this.interval);
                this.expired = true;
            }
        },
        editExpired() {
            this.isEditingExpired = !this.isEditingExpired;
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-countdown {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .countdown {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .expired {
        .expired-layout {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: stretch;
        }
    }
}
</style>
