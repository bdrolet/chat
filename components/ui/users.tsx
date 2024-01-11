'use client'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { User, UserType } from '@/components/types/user';
import { FaUserDoctor } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa6'
import Link from 'next/link';

export interface UserCardProps {
    user: User;
}

export function UserCard(props: UserCardProps) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{props.user.name} 
                    {props.user.UserType == UserType.Provider ? 
                    (<FaUserDoctor />) : (<FaRegUser />)}
                </Card.Title>
                <Card.Subtitle>
                    {props.user.UserType}
                </Card.Subtitle>
                <Link href={`/user/${props.user.id}`}>
                    Select {props.user.name}
                </Link>
            </Card.Body>
        </Card>
    )
}