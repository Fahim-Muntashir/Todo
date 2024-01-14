import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from '../ui/button';
import { useState } from "react";

const TodoFilter = () => {
    const [position, setPosition] = useState('button')
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className='bg-primary-gradient text-xl font-semibold'>Filter</Button>            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Priroty</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default TodoFilter;