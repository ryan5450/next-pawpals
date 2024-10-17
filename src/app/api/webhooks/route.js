import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { clerkClient } from '@clerk/nextjs/server';
import { createOrUpdateUser, deleteUser } from '@/lib/actions/user';

