import { EventIcon, Home , OnDemandIcon, ProgrammeIcon } from "./Icon";

export const SIDE_BAR_DATA = [

{
    tabIcon : <Home/>,
    tabName : 'Home',
    tabId : 'tab-one'
},
{
    tabIcon : <EventIcon/>,
    tabName : 'Events',
    tabId : 'tab-one'
},
{
    tabIcon : <OnDemandIcon/>,
    tabName : 'on demand',
    tabId : 'tab-one'
},
{
    tabIcon : <ProgrammeIcon/>,
    tabName : 'Programmes',
    tabId : 'tab-one'
}
];

export const SIDE_BAR_DATA_2 = [
    {
        tabName  : 'contact us',
        tabLink : '/contact'
    },
    {
        tabName  : 'about us',
        tabLink : '/about'
    },
    {
        tabName  : 'Home',
        tabLink : '/home'
    },
]

export const  CARD_DATA = [
    {
        heading : 'card one',
        describe : 'Lorem ipsum dolor sit consectetur.  ',
        content :[
            {
                item:'card-1',
                button : 'button'
            }
        ]
    },
    {
        heading : 'card Two',
        describe : 'Lorem ipsum dolor sit consectetur.  ',
        content :[
            {
                item:'card-2',
                button : 'button'
            }
        ]
    },
    {
        heading : 'card three',
        describe : 'Lorem ipsum dolor sit consectetur.  ',
        content :[
            {
                item:'card-3',
                button : 'button'
            }
        ]
    }
]