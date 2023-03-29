import { User } from '@/types/user'

/** Mocks data used to login */
export const userMock: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@avest.fr',
    phone: '0123456789',
    socials: {
        facebook: 'https://www.facebook.com/john.doe',
        twitter: 'https://twitter.com/john.doe',
        linkedin: 'https://www.linkedin.com/in/john.doe',
        github: 'https://www.github.com/john.doe',
    },
}
