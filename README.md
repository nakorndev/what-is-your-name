# ชื่อของคุณคืออะไร

> Repository นี้เป็นส่วนหนึ่งของการฝึกสอนโดย [https://nakorn.dev/](https://nakorn.dev/) สามารถรับชมได้ที่ [คอร์สเรียน Git](https://nakorn.dev/details/git)

วิธีการ Contribute ตามบทเรียน

- เนื่องจากถึงแม้ว่าคุณจะ Clone โปรเจค `nakorndev/what-is-your-name` ไปแล้ว และคุณก็สามารถ Commit ได้ก็จริง แต่คุณจะไม่สามารถ Push ขึ้นมาได้เพราะไม่มีสิทธิ์การเข้าถึง
- แต่เนื่องจากเป็น Public Repository คุณจะยังคงสามารถมีส่วนร่วมได้โดยการ Fork
- ให้กดที่ Fork จากด้านบนขวาของเว็บ จากนั้นแล้วโปรเจค `nakorndev/what-is-your-name` จะกลายเป็น `your-username/what-is-your-name` (your-username หมายถึงชื่อของคุณ) ก็คือเราได้ลอกโปรเจคของผู้อื่น ลงมาใน Repository ของคุณเอง
- จากนั้นให้ Clone โปรเจคในชื่อของคุณที่เพิ่งได้ Fork มา
- เพิ่มไฟล์ลงใน `data/john-doe.yml` ในกรณีที่คุณชื่อว่า John Doe เป็นต้น โดยชื่อไฟล์ต้องเป็นพิมพ์เล็กทั้งหมดและแบ่งด้วย Dash `-` ซึ่งควรเป็นชื่อจริงและนามสกุลของคุณ
- จากนั้นให้กรอกรายละเอียดดังนี้ลงในไฟล์ที่เพิ่งสร้าง

```yml
- name: <ชื่อจริง-นามสกุลของคุณ>
- subtitle: <คำอธิบายตัวคุณ>
- username: <ชื่อ Username บน GitHub>
- gender: <ใช้คำว่า male หรือ female เท่านั้น (เพศชาย, เพศหญิง)>
- birth_year: <ปีเกิดของคุณแบบพุทธศักราช>
```

![img](https://storage.googleapis.com/nakorndev-public/courses/git/contribute-sample.png)
*ภาพตัวอย่างการสร้างไฟล์และเขียนรายละเอียดลงในไฟล์*

- เมื่อสร้างไฟล์เสร็จสิ้น ให้ทำการ Commit และ Push ไปยัง Repository ของคุณที่เพิ่งได้ Fork มาบน Branch `master` โดยใช้ข้อความ Commit ว่า `Add <filename>` เช่น `Add john-doe.yml` เป็นต้น

![](รูปตัวอย่างการ Commit)

- จากนั้นกลับมายัง `nakorndev/what-is-your-name` อีกครั้ง ไปที่ Pull Request ([https://github.com/nakorndev/what-is-your-name/pulls](https://github.com/nakorndev/what-is-your-name/pulls))
- กด `New pull request`
- ให้เลือก `head fork: your-username/what-is-your-name` และ `compare: master`
- จากนั้นจะมีส่วนให้พิมพ์อธิบายถึงเหตุผลการขอ Pull Request ที่หมายถึงนำโค้ดของคุณที่ Fork มาใช้งานกับของเรา ให้ระบุหัวข้ออย่างไรก็ได้ที่หมายถึงขอเพิ่มชื่อคุณเข้ามายังใน Repository ของเรา ตามด้วยข้อความอธิบาย
- จากนั้น [nakorndev](https://github.com/nakorndev) เจ้าของโปรเจคนี้จะมารีวิวว่าถูกต้องหรือไม่ หากเรียบร้อยจะทำการยอมรับและโค้ดของคุณก็จะเข้ามายัง Repository ของเรา
