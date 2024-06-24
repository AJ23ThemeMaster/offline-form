<?php

namespace App\Exports;

use App\Models\Contact;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ContactsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Contact::select('full_name', 'identification', 'email', 'address', 'phone_number', 'suggestions', 'created_at')->get();
    }

    public function headings(): array
    {
        return [
            'Nombre Completo',
            'Identificación',
            'Email',
            'Dirección',
            'Número de Contacto',
            'Sugerencias',
            'Fecha de Creación',
        ];
    }
}
