type Socials = 'facebook' | 'twitter' | 'linkedin' | 'github'

export type User = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    socials: {
        [key in Socials]: string
    }
}
