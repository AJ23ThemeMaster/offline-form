<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function sync(Request $request)
    {
        $data = $request->all();
        
        $validator = Validator::make($data, [
            '*.full_name' => 'required|string|max:255',
            '*.identification' => 'required|string|max:255',
            '*.email' => 'required|email|max:255',
            '*.address' => 'required|string|max:255',
            '*.phone_number' => 'required|string|max:255',
            '*.suggestions' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        foreach ($data as $contactData) {
            Contact::create($contactData);
        }

        return response()->json(['message' => 'Datos sincronizados exitosamente.'], 200);
    }
}
