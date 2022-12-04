import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Brand from '../../../components/Brand/index'

export default {
    title: 'Components/Brand/Example',
    component: Brand,
} as ComponentMeta<typeof Brand>

export const Light = (args: any) => (
    <div className="bg-white min-h-min w-full p-10">
        <Brand {...args} className="w-32 h-16" />
    </div>
)
Light.args = {
    color: "light",
}

export const Dark = (args: any) => (
    <div className="bg-navy min-h-min w-full p-10">
        <Brand {...args} className="w-32 h-16" />
    </div>
)
Dark.args = {
    color: "dark",
}