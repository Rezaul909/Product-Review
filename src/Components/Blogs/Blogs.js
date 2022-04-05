import React from 'react';

const Blogs = () => {
    return (
        <div className='m-20'>
            <h1 className='text-5xl mt-24'>প্রশ্নঃ Context API কী?</h1>
            <p className='text-xl mt-5'> <span className='text-2xl font-semibold'>উত্তরঃ</span> যদি React JS এ এমন একটা কম্পোনেন্ট এ ডাটা পাঠাতে হয় যেটি আমার প্যারেন্ট কম্পোনেন্টের চাইল্ড না, তখন আমাদের root-component থেকে nth-component (যেই কম্পোনেন্ট এ ডাটা টা দরকার) সেই কম্পোনেন্ট পর্যন্ত multiple component পার হয়ে প্রপ্স এর মাধ্যমে ডাটা টা পাঠাতে হয়। এই প্রসেসটাকে বলে Props Drilling। কিন্তু সমস্যাটা হল প্রপ্সের মাধ্যমে ডাটা পাঠাতে হলে মাঝে এমন অনেক কম্পোনেন্ট থাকতে পারে যাদের আসলে এই ডাটা টা দরকার নেই, শুধু nth-child কে পাঠানোর জন্য তাকে প্রপ্স এর মাধ্যমে এই ডাটা টা নিতে হয়েছে। এই সমস্যা সমাধান করেছে Context API, এর মাধ্যমে ডাটাকে globally declare করে এবং প্রপ্স আকারে pass না করেই যেকোন কম্পোনেন্ট থেকে তাকে একসেস করে ব্যবহার করা যায়।  অর্থাৎ, কন্টেক্সট এপিআই দিয়ে props Drilling না করেই tree এর নিচের দিকের যে কোন চাইল্ড কম্পোনেন্টে তার উপর থেকে ডাটা পাঠানো যায়।</p>

            <h1 className='text-5xl mt-24'>প্রশ্নঃ Inline, Block এবং Inline-block এর মধ্যে পার্থক্য?</h1>
            <div className='mt-16'>
                <table class="border-separate border border-slate-400 ...">
                    <thead>
                        <tr>
                        <th class="border border-slate-300 ...">Inline</th>
                        <th class="border border-slate-300 ...">Block</th>
                        <th class="border border-slate-300 ...">Inline-block</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-slate-300 ..."> এলিমেন্টের যতটুকু জায়গা দরকার ততটুকু height/width নেয়, এবং চাইলেও মার্জিন/প্যাডিং বাড়নো যায় না </td> 
                            <td class="border border-slate-300 ..."> স্ক্রীনের সম্পূর্ণ width নেয়</td>
                            <td class="border border-slate-300 ..."> এলিমেন্টের যতটুকু দরকার ততটুকু height/width নেয়, তবে চাইলে মার্জিন/প্যাডিং বাড়নো যায়। </td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 ...">নতুন লাইন শুরু করে না </td>
                            <td class="border border-slate-300 ...">নতুন লাইন শুরু করে </td>
                            <td class="border border-slate-300 ...">নতুন লাইন শুরু করে না</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 ..."> ১টা ইনলাইন এলিমেন্ট অন্য একটা ইনলাইন এলিমেন্টের পিছনে অবস্থান করতে পারে। </td>
                            <td class="border border-slate-300 ...">১টা ব্লক এলিমেন্ট অন্য একটা ব্লক এলিমেন্টের পিছনে অবস্থান করতে পারে না।</td>
                            <td class="border border-slate-300 ...">১টা ইনলাইন-ব্লক এলিমেন্ট অন্য একটা ইনলাইন-ব্লক এলিমেন্টের পিছনে অবস্থান করতে পারে।</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 ...">টপ ও বটমে ডিফল্ট মার্জিন থাকে না, এবং চাইলেও মার্জিন/প্যাডিং দেওয়া যায় না</td>
                            <td class="border border-slate-300 ...">টপ ও বটমে ডিফল্ট মার্জিন থাকে</td>
                            <td class="border border-slate-300 ...">টপ ও বটমে ডিফল্ট মার্জিন থাকে না ,তবে মার্জিন/প্যাডিং দেওয়া যায়।</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-300 ...">height/width সেট করা যায় না </td>
                            <td class="border border-slate-300 ...">height/width সেট করা যায় </td>
                            <td class="border border-slate-300 ...">height/width সেট করা যায়</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    );
};

export default Blogs;