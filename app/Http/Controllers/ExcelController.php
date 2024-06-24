<?php

namespace App\Http\Controllers;

use App\Exports\ContactsExport;
use Maatwebsite\Excel\Facades\Excel;

class ExcelController extends Controller
{
    public function generateExcel()
    {
        return Excel::download(new ContactsExport, 'contactos.xlsx');
    }
}
