interface CustomerReader
{
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;    
}

interface CustomerWriter
{
    name: string;
    address: string;
    phoneNumber: string;
    email: string;    
}

interface Customer
{
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;    
    gender: string;
    customerTypeId: number;
    hobbies: string[];
    countryCodes: string[];
}