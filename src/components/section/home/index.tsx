import { Stack } from '@mui/material';
import { Item } from '@/components';
import { MediaCard } from '@/components/common/card';
import * as React from 'react';

export function Home(): React.ReactElement {

    const cardProps = {
        image: "https://dummyimage.com/600x400/000/fff",
        maxWidth: 345,
        title: "Lorem",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, fugiat.",
        alt: "Example",
        height: "145"
    }

    const bodyContent = [cardProps, cardProps, cardProps];

    return (
        <>
            <span className="fs-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos
                expedita qui fugiat doloremque consectetur suscipit. Rem, quo repudiandae delectus
                suscipit ratione totam quidem nihil ducimus qui, veritatis tempora nesciunt.
            </span>
            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                {bodyContent.map((content) => (
                    <>
                        <Item>
                            <MediaCard {...content} />
                        </Item>
                    </>
                ))}
            </Stack>
        </>
    )
}