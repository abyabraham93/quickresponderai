export default {
    editor: {
        label: {
            en: 'Countdown',
        },
    },
    properties: {
        date: {
            label: { en: 'Date', fr: 'Date' },
            type: 'Text',
            section: 'settings',
            options: {
                placeholder: 'YYYY-MM-DDTHH:MM:SS',
            },
            bindable: true,
            defaultValue: '2021-04-30T10:11:20',
        },
        units: {
            type: 'OnOff',
            section: 'settings',
            label: {
                en: 'Layouts for units?',
                fr: 'Layouts for units?',
            },
            defaultValue: true,
        },
        separator: {
            type: 'OnOff',
            section: 'settings',
            label: {
                en: 'Separator?',
                fr: 'Separator?',
            },
            defaultValue: false,
        },
        expired: {
            type: 'Button',
            section: 'settings',
            editorOnly: true,
            options: {
                text: {
                    en: 'Toggle expired layout',
                },
                action: 'editExpired',
            },
        },
        days: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text' },
        },
        hours: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text' },
        },
        minutes: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text' },
        },
        seconds: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text' },
        },
        separatorLayouts: {
            hidden: true,
            defaultValue: [],
        },
        unitDays: {
            hidden: true,
            defaultValue: [],
        },
        unitHours: {
            hidden: true,
            defaultValue: [],
        },
        unitMinutes: {
            hidden: true,
            defaultValue: [],
        },
        unitSeconds: {
            hidden: true,
            defaultValue: [],
        },
        expiredLayout: {
            hidden: true,
            defaultValue: [],
        },
    },
};
