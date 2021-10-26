import React from 'react'
import clsx from 'clsx'
import { DividerTemplate } from './ActionListDivider.stories'
import { ListItemTemplate } from './ActionListItem.stories'
import { ListTemplate } from './ActionList.stories'

export default {
    title: 'Components/ActionList/Patterns'
    //   decorators: [
    //     Story => (
    //       <nav>
    //         <Story />
    //       </nav>
    //     )
    //   ]
}

export const NavWithSubItems = ListTemplate.bind({})
NavWithSubItems.storyName = "[Nav] Nested collapsible menu"
NavWithSubItems.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    role: 'menu',
    ariaLabel: 'Main menu description',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate text="Nav Item" href="/" />
            <ListItemTemplate text="Nav Item" href="/" />
            <ListItemTemplate text="Nav Item" href="/" />
            <ListItemTemplate
                collapsible
                containsSubItem
                text="Nav Item"
                children={
                    <ListTemplate
                        role="menu"
                        subGroup
                        ariaLabel="Sub nav descrioption"
                        children={
                            <>
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                            </>
                        }
                    />
                }
            />
        </>
    )
}
NavWithSubItems.decorators = [
    Story => (
        <nav>
            <Story />
        </nav>
    )
]

export const NavWithSubItemsLeadingVisual16px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual16px.storyName = "[Nav] Nested collapsible menu leadingVisual 16px"
NavWithSubItemsLeadingVisual16px.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                containsSubItem
                collapsible
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
                children={
                    <ListTemplate
                        subGroup
                        ariaLabel="Sub nav descrioption"
                        children={
                            <>
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                                <ListItemTemplate
                                    subItem
                                    text="Sub Nav Item"
                                    href="/"
                                    leadingVisualSize="ActionList-item-content--visual--16"
                                    leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
                                />
                            </>
                        }
                    />
                }
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
        </>
    )
}
NavWithSubItemsLeadingVisual16px.decorators = [
    Story => (
        <nav>
            <Story />
        </nav>
    )
]

export const NavWithSubItemsLeadingVisual20px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual20px.storyName = "[Nav] Nested collapsible menu leadingVisual 20px"
NavWithSubItemsLeadingVisual20px.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--20"
                leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--20"
                leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--20"
                leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
            />
            <ListItemTemplate
                containsSubItem
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--20"
                leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
                children={
                    <ListTemplate
                        subGroup
                        ariaLabel="Sub nav descrioption"
                        children={
                            <>
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                                <ListItemTemplate
                                    subItem
                                    text="Nav Item"
                                    href="/"
                                    leadingVisualSize="ActionList-item-content--visual--20"
                                    leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
                                />
                            </>
                        }
                    />
                }
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--20"
                leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--20"
                leadingVisual={`<img class="avatar avatar-small" alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=40" width="20" height="20" style="border-radius: 50%" />`}
            />
        </>
    )
}
NavWithSubItemsLeadingVisual20px.decorators = [
    Story => (
        <nav>
            <Story />
        </nav>
    )
]

export const NavWithSubItemsLeadingVisual24px = ListTemplate.bind({})
NavWithSubItemsLeadingVisual24px.storyName = "[Nav] Nested collapsible menu leadingVisual 24px"
NavWithSubItemsLeadingVisual24px.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--24"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--24"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--24"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
            />
            <ListItemTemplate
                containsSubItem
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--24"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
                children={
                    <ListTemplate
                        subGroup
                        ariaLabel="Sub nav descrioption"
                        children={
                            <>
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" />
                                <ListItemTemplate subItem text="Sub Nav Item" href="/" ariaCurrent="page" />
                                <ListItemTemplate
                                    subItem
                                    text="Nav Item"
                                    href="/"
                                    leadingVisualSize="ActionList-item-content--visual--24"
                                    leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
                                />
                            </>
                        }
                    />
                }
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--24"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--24"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.5 1.25a.75.75 0 00-1.5 0v8.69L6.447 5.385a.75.75 0 10-1.061 1.06L9.94 11H1.25a.75.75 0 000 1.5h8.69l-4.554 4.553a.75.75 0 001.06 1.061L11 13.561v8.689a.75.75 0 001.5 0v-8.69l4.553 4.554a.75.75 0 001.061-1.06L13.561 12.5h8.689a.75.75 0 000-1.5h-8.69l4.554-4.553a.75.75 0 10-1.06-1.061L12.5 9.939V1.25z"></path></svg>`}
            />
        </>
    )
}
NavWithSubItemsLeadingVisual24px.decorators = [
    Story => (
        <nav>
            <Story />
        </nav>
    )
]

export const MenuWithDivider = ListTemplate.bind({})
MenuWithDivider.storyName = "[Menu] Divider"
MenuWithDivider.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <DividerTemplate />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
            <ListItemTemplate
                text="Nav Item"
                href="/"
                leadingVisualSize="ActionList-item-content--visual--16"
                leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>`}
            />
        </>
    )
}

export const MenuWithSectionDivider = ListTemplate.bind({})
MenuWithSectionDivider.storyName = "[Menu] Section divider"
MenuWithSectionDivider.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate text="Nav Item" href="/" />
            <ListItemTemplate text="Nav Item" href="/" />
            <ListItemTemplate text="Nav Item" href="/" />
            <DividerTemplate title="Section DividerTemplate (subtle)" id="some-unique-id" />
            <ListItemTemplate
                containsSubItem
                children={
                    <ListTemplate
                        ariaLabelledBy="some-unique-id"
                        role="menu"
                        children={
                            <>
                                <ListItemTemplate text="Nav Item" href="/" />
                                <ListItemTemplate text="Nav Item" href="/" ariaCurrent="page" />
                                <ListItemTemplate text="Nav Item" href="/" variant="ActionList-item--danger" />
                            </>
                        }
                    />
                }
            />
        </>
    )
}


export const MenuSingleSelect = ListTemplate.bind({})
MenuSingleSelect.storyName = "[Menu] Single select"
MenuSingleSelect.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate text="Option label" singleSelect />
            <ListItemTemplate text="Option label" singleSelect />
            <ListItemTemplate text="Option label" singleSelect />
            <ListItemTemplate text="Option label" singleSelect />
            <ListItemTemplate text="Option label" singleSelect />
        </>
    )
}

export const MenuMultiSelect = ListTemplate.bind({})
MenuMultiSelect.storyName = "[Menu] Multi select"
MenuMultiSelect.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Main menu description',
    role: 'menu',
    showDividers: false,
    children: (
        <>
            <ListItemTemplate text="Option label" multiSelect />
            <ListItemTemplate text="Option label" multiSelect />
            <ListItemTemplate text="Option label" multiSelect />
            <ListItemTemplate text="Option label" multiSelect />
            <ListItemTemplate text="Option label" multiSelect />
        </>
    )
}

export const ListSingleSelect = ListTemplate.bind({})
ListSingleSelect.storyName = "[Listbox] Single select"
ListSingleSelect.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Select an option',
    role: 'listbox',
    showDividers: false,
    listboxMultiSelect: false,
    children: (
        <>
            <ListItemTemplate text="Option label" listSingleSelect />
            <ListItemTemplate text="Option label" listSingleSelect />
            <ListItemTemplate text="Option label" listSingleSelect />
            <ListItemTemplate text="Option label" listSingleSelect />
            <ListItemTemplate text="Option label" listSingleSelect />
        </>
    )
}

export const ListMultiSelect = ListTemplate.bind({})
ListMultiSelect.storyName = "[Listbox] Multi select"
ListMultiSelect.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Select multiple options',
    role: 'listbox',
    showDividers: false,
    listboxMultiSelect: true,
    children: (
        <>
            <ListItemTemplate text="Option label" listMultiSelect />
            <ListItemTemplate text="Option label" listMultiSelect />
            <ListItemTemplate text="Option label" listMultiSelect />
            <ListItemTemplate text="Option label" listMultiSelect />
            <ListItemTemplate text="Option label" listMultiSelect />
        </>
    )
}

export const List = ListTemplate.bind({})
List.storyName = "[List] Group of links"
List.args = {
    ...ListTemplate.args,
    ...ListItemTemplate.args,
    ariaLabel: 'Details',
    role: undefined,
    showDividers: false,
    children: (
        <>
            <DividerTemplate title="Details" />
            <ListItemTemplate listSemantic href="/" text="github.com/primer" leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`} />
            <ListItemTemplate listSemantic href="/" text="MIT License" leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>`} />
            <ListItemTemplate listSemantic href="/" text="256 stars" leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>`} />
            <ListItemTemplate listSemantic href="/" text="3 forks" leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>`} />
        </>
    )
}