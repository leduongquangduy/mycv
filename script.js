// Global variables
// const cvData = {
//   personalInfo: {
//     name: "Nguyễn Văn Minh",
//     title: "Kỹ sư Cơ khí",
//     description:
//       "Kỹ sư cơ khí với 5+ năm kinh nghiệm trong thiết kế và sản xuất. Chuyên về CAD/CAM, tự động hóa và tối ưu hóa quy trình sản xuất.",
//     profileImage: "/professional-engineer-portrait.png",
//     cvDownloadLink: "#",
//   },
//   about: {
//     description:
//       "Tôi là một kỹ sư cơ khí đam mê với việc tạo ra những giải pháp kỹ thuật sáng tạo. Với kinh nghiệm sâu rộng trong thiết kế sản phẩm, phân tích kết cấu và quản lý dự án, tôi luôn tìm kiếm cơ hội để áp dụng công nghệ mới nhằm cải thiện hiệu quả và chất lượng sản phẩm.",
//     yearsExperience: "5+",
//     projectsCompleted: "50+",
//     certifications: "8",
//   },
//   experience: [
//     {
//       period: "2022 - Hiện tại",
//       position: "Kỹ sư Cơ khí Trưởng",
//       company: "Công ty TNHH Cơ khí ABC",
//       description:
//         "Lãnh đạo nhóm thiết kế và phát triển sản phẩm mới. Quản lý dự án từ khâu concept đến sản xuất hàng loạt.",
//     },
//     {
//       period: "2020 - 2022",
//       position: "Kỹ sư Thiết kế",
//       company: "Tập đoàn Sản xuất XYZ",
//       description:
//         "Thiết kế và phát triển các linh kiện cơ khí chính xác cao. Tối ưu hóa quy trình sản xuất và giảm chi phí 15%.",
//     },
//     {
//       period: "2019 - 2020",
//       position: "Kỹ sư Cơ khí Junior",
//       company: "Công ty Kỹ thuật DEF",
//       description: "Hỗ trợ thiết kế và kiểm tra chất lượng sản phẩm. Tham gia các dự án cải tiến công nghệ sản xuất.",
//     },
//   ],
//   skills: {
//     technical: [
//       { name: "SolidWorks", level: 95 },
//       { name: "AutoCAD", level: 90 },
//       { name: "ANSYS", level: 85 },
//       { name: "Mastercam", level: 80 },
//       { name: "Python", level: 75 },
//     ],
//     software: [
//       { name: "Microsoft Office", level: 90 },
//       { name: "Project Management", level: 85 },
//       { name: "Quality Control", level: 88 },
//       { name: "Lean Manufacturing", level: 82 },
//       { name: "Six Sigma", level: 78 },
//     ],
//   },
//   education: [
//     {
//       degree: "Thạc sĩ Kỹ thuật Cơ khí",
//       institution: "Đại học Bách khoa Hà Nội",
//       period: "2017 - 2019",
//       description: "Chuyên ngành Thiết kế Chế tạo Máy. GPA: 3.8/4.0",
//     },
//     {
//       degree: "Cử nhân Kỹ thuật Cơ khí",
//       institution: "Đại học Công nghiệp Hà Nội",
//       period: "2013 - 2017",
//       description: "Tốt nghiệp loại Giỏi. Luận văn về tối ưu hóa thiết kế bánh răng.",
//     },
//   ],
//   projects: [
//     {
//       title: "Hệ thống tự động hóa sản xuất",
//       description: "Thiết kế và triển khai hệ thống tự động hóa cho dây chuyền sản xuất, tăng năng suất 40%.",
//       image: "/industrial-automation-system.jpg",
//       technologies: "PLC, HMI, SolidWorks",
//     },
//     {
//       title: "Thiết kế máy gia công CNC",
//       description: "Phát triển máy gia công CNC chuyên dụng cho ngành ô tô với độ chính xác cao.",
//       image: "/cnc-machine-design.jpg",
//       technologies: "CAD/CAM, ANSYS, Mastercam",
//     },
//     {
//       title: "Tối ưu hóa quy trình sản xuất",
//       description: "Áp dụng Lean Manufacturing để cải thiện quy trình, giảm waste 25%.",
//       image: "/lean-manufacturing-process.jpg",
//       technologies: "Lean, Six Sigma, Kaizen",
//     },
//   ],
//   contact: {
//     email: "nguyenvanminh@email.com",
//     phone: "+84 123 456 789",
//     location: "Hà Nội, Việt Nam",
//     social: [
//       {
//         name: "LinkedIn",
//         url: "https://linkedin.com/in/nguyenvanminh",
//         icon: "fab fa-linkedin",
//       },
//       {
//         name: "GitHub",
//         url: "https://github.com/nguyenvanminh",
//         icon: "fab fa-github",
//       },
//       {
//         name: "Facebook",
//         url: "https://facebook.com/nguyenvanminh",
//         icon: "fab fa-facebook",
//       },
//     ],
//   },
// }

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM loaded, starting to load CV data")
  loadCVData()
})

// Load CV data from JSON file
async function loadCVData() {
  try {
    console.log("[v0] Fetching cv-data.json")
    const response = await fetch("cv-data.json")

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const cvData = await response.json()
    console.log("[v0] CV data loaded successfully:", cvData)
    console.log("[v0] Name from JSON:", cvData.personalInfo.name)

    populateCV(cvData)
    initializeAnimations()
    initializeNavigation()
    initializeCVDownload(cvData)
    hideLoadingScreen()
  } catch (error) {
    console.error("[v0] Error loading CV data:", error)
    alert("Không thể load dữ liệu CV. Vui lòng kiểm tra file cv-data.json và đảm bảo server đang chạy.")
    hideLoadingScreen()
  }
}

// Hide loading screen with animation
function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen")
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 2000)
}

// Populate CV with data from JSON
function populateCV(cvData) {
  console.log("[v0] Starting to populate CV with data")
  console.log("[v0] Setting name to:", cvData.personalInfo.name)

  // Navigation and Hero
  document.getElementById("nav-name").querySelector("span").textContent = cvData.personalInfo.name
  document.getElementById("hero-name").textContent = cvData.personalInfo.name
  document.getElementById("hero-title").textContent = cvData.personalInfo.title
  document.getElementById("hero-description").textContent = cvData.personalInfo.description
  document.getElementById("hero-image").src = cvData.personalInfo.profileImage
  document.getElementById("download-cv").href = cvData.personalInfo.cvDownloadLink

  // About section
  document.getElementById("about-description").textContent = cvData.about.description
  document.getElementById("years-experience").textContent = cvData.about.yearsExperience + "+"
  document.getElementById("projects-completed").textContent = cvData.about.projectsCompleted + "+"
  document.getElementById("certifications").textContent = cvData.about.certifications

  // Experience timeline
  populateExperience(cvData.experience)

  // Skills
  populateSkills(cvData.skills)

  // Education
  populateEducation(cvData.education)

  // Projects
  populateProjects(cvData.projects)

  // Contact
  populateContact(cvData.contact)

  // Footer
  document.getElementById("footer-name").textContent = cvData.personalInfo.name

  setTimeout(() => {
    const heroTitle = document.getElementById("hero-name")
    typeWriter(heroTitle, cvData.personalInfo.name, 150)
  }, 3500)

  console.log("[v0] CV population completed")
}

// Populate experience timeline
function populateExperience(experienceData) {
  const timeline = document.getElementById("experience-timeline")
  timeline.innerHTML = ""

  experienceData.forEach((exp, index) => {
    const timelineItem = document.createElement("div")
    timelineItem.className = "timeline-item"
    timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h4 class="timeline-title">${exp.position}</h4>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
        `
    timeline.appendChild(timelineItem)
  })
}

// Populate skills with animated progress bars
function populateSkills(skillsData) {
  const technicalSkills = document.getElementById("technical-skills")
  const softwareSkills = document.getElementById("software-skills")

  technicalSkills.innerHTML = ""
  softwareSkills.innerHTML = ""

  skillsData.technical.forEach((skill) => {
    const skillElement = createSkillElement(skill)
    technicalSkills.appendChild(skillElement)
  })

  skillsData.software.forEach((skill) => {
    const skillElement = createSkillElement(skill)
    softwareSkills.appendChild(skillElement)
  })
}

// Create skill element with progress bar
function createSkillElement(skill) {
  const skillDiv = document.createElement("div")
  skillDiv.className = "skill-item"
  skillDiv.innerHTML = `
        <div class="skill-name">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `
  return skillDiv
}

// Populate education
function populateEducation(educationData) {
  const educationContent = document.getElementById("education-content")
  educationContent.innerHTML = ""

  educationData.forEach((edu) => {
    const eduDiv = document.createElement("div")
    eduDiv.className = "col-md-6 mb-4"
    eduDiv.innerHTML = `
            <div class="card h-100">
                <div class="card-header">
                    <h5 class="mb-0">${edu.degree}</h5>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${edu.institution}</h6>
                    <p class="card-text text-muted">${edu.period}</p>
                    <p class="card-text">${edu.description}</p>
                </div>
            </div>
        `
    educationContent.appendChild(eduDiv)
  })
}

// Populate projects
function populateProjects(projectsData) {
  const projectsContent = document.getElementById("projects-content")
  projectsContent.innerHTML = ""

  projectsData.forEach((project) => {
    const projectDiv = document.createElement("div")
    projectDiv.className = "col-lg-4 col-md-6 mb-4"
    projectDiv.innerHTML = `
            <div class="card h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="mt-auto">
                        <small class="text-muted">${project.technologies}</small>
                    </div>
                </div>
            </div>
        `
    projectsContent.appendChild(projectDiv)
  })
}

// Populate contact information
function populateContact(contactData) {
  document.getElementById("contact-email").querySelector("p").textContent = contactData.email
  document.getElementById("contact-phone").querySelector("p").textContent = contactData.phone
  document.getElementById("contact-location").querySelector("p").textContent = contactData.location

  // Social links
  const socialLinks = document.getElementById("social-links")
  socialLinks.innerHTML = ""

  contactData.social.forEach((social) => {
    const socialLink = document.createElement("a")
    socialLink.href = social.url
    socialLink.className = "social-link"
    socialLink.target = "_blank"
    socialLink.innerHTML = `<i class="${social.icon}"></i>`
    socialLinks.appendChild(socialLink)
  })
}

// Initialize scroll animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")

        // Animate skill bars
        if (entry.target.classList.contains("skill-item")) {
          const progressBar = entry.target.querySelector(".skill-progress")
          const level = progressBar.dataset.level
          setTimeout(() => {
            progressBar.style.width = level + "%"
          }, 200)
        }

        // Animate counters
        if (entry.target.classList.contains("stat-item")) {
          animateCounter(entry.target.querySelector("h3"))
        }
      }
    })
  }, observerOptions)

  // Observe elements for animation
  setTimeout(() => {
    document.querySelectorAll(".timeline-item, .skill-item, .stat-item, .card").forEach((el) => {
      el.classList.add("fade-in")
      observer.observe(el)
    })
  }, 3000)
}

// Animate counter numbers
function animateCounter(element) {
  const target = Number.parseInt(element.textContent)
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 16)
}

// Initialize smooth navigation
function initializeNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Update active navigation link on scroll
  window.addEventListener("scroll", updateActiveNavLink)

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-navbar")
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(0, 0, 0, 0.98)"
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.95)"
    }
  })
}

// Update active navigation link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
}

// Initialize contact form
function initializeContactForm() {
  const contactForm = document.querySelector(".contact-form")
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Show success message
    const button = this.querySelector('button[type="submit"]')
    const originalText = button.innerHTML

    button.innerHTML = '<i class="fas fa-check me-2"></i>Đã gửi!'
    button.disabled = true

    setTimeout(() => {
      button.innerHTML = originalText
      button.disabled = false
      this.reset()
    }, 3000)
  })
}

function initializeCVDownload(cvData) {
  const downloadBtn = document.getElementById("download-cv")

  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault()
    generateAndDownloadCV(cvData)
  })
}

function generateAndDownloadCV(cvData) {
  // Create a new window with printable CV
  const printWindow = window.open("", "_blank")

  const cvHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>CV - ${cvData.personalInfo.name}</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: 'Arial', sans-serif; 
                line-height: 1.6; 
                color: #333; 
                background: white;
                padding: 20px;
            }
            .cv-container { max-width: 800px; margin: 0 auto; }
            .header { 
                text-align: center; 
                border-bottom: 3px solid #8B0000; 
                padding-bottom: 20px; 
                margin-bottom: 30px; 
            }
            .header h1 { 
                color: #8B0000; 
                font-size: 2.5em; 
                margin-bottom: 10px; 
            }
            .header h2 { 
                color: #666; 
                font-size: 1.3em; 
                margin-bottom: 15px; 
            }
            .contact-info { 
                display: flex; 
                justify-content: center; 
                gap: 30px; 
                flex-wrap: wrap; 
            }
            .contact-item { font-size: 0.9em; color: #666; }
            .section { 
                margin-bottom: 30px; 
            }
            .section-title { 
                color: #8B0000; 
                font-size: 1.4em; 
                border-bottom: 2px solid #8B0000; 
                padding-bottom: 5px; 
                margin-bottom: 15px; 
            }
            .experience-item, .education-item { 
                margin-bottom: 20px; 
                padding-left: 20px; 
                border-left: 3px solid #ddd; 
            }
            .experience-item h3, .education-item h3 { 
                color: #8B0000; 
                font-size: 1.1em; 
            }
            .company, .institution { 
                font-weight: bold; 
                color: #666; 
            }
            .period { 
                color: #999; 
                font-size: 0.9em; 
            }
            .skills-grid { 
                display: grid; 
                grid-template-columns: 1fr 1fr; 
                gap: 30px; 
            }
            .skill-category h4 { 
                color: #8B0000; 
                margin-bottom: 10px; 
            }
            .skill-item { 
                display: flex; 
                justify-content: space-between; 
                margin-bottom: 8px; 
                padding: 5px 0; 
                border-bottom: 1px solid #eee; 
            }
            .projects-grid { 
                display: grid; 
                grid-template-columns: 1fr 1fr; 
                gap: 20px; 
            }
            .project-item { 
                border: 1px solid #ddd; 
                padding: 15px; 
                border-radius: 5px; 
            }
            .project-item h4 { 
                color: #8B0000; 
                margin-bottom: 10px; 
            }
            .technologies { 
                color: #666; 
                font-size: 0.9em; 
                font-style: italic; 
            }
            @media print {
                body { padding: 0; }
                .cv-container { max-width: none; }
            }
        </style>
    </head>
    <body>
        <div class="cv-container">
            <div class="header">
                <h1>${cvData.personalInfo.name}</h1>
                <h2>${cvData.personalInfo.title}</h2>
                <div class="contact-info">
                    <div class="contact-item"> ${cvData.contact.email}</div>
                    <div class="contact-item"> ${cvData.contact.phone}</div>
                    <div class="contact-item"> ${cvData.contact.location}</div>
                </div>
            </div>

            <div class="section">
                <h3 class="section-title">Giới thiệu</h3>
                <p>${cvData.about.description}</p>
            </div>

            <div class="section">
                <h3 class="section-title">Kinh nghiệm làm việc</h3>
                ${cvData.experience
                  .map(
                    (exp) => `
                    <div class="experience-item">
                        <h3>${exp.position}</h3>
                        <div class="company">${exp.company}</div>
                        <div class="period">${exp.period}</div>
                        <p>${exp.description}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div class="section">
                <h3 class="section-title">Kỹ năng</h3>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h4>Kỹ năng kỹ thuật</h4>
                        ${cvData.skills.technical
                          .map(
                            (skill) => `
                            <div class="skill-item">
                                <span>${skill.name}</span>
                                <span>${skill.level}%</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                    <div class="skill-category">
                        <h4>Phần mềm</h4>
                        ${cvData.skills.software
                          .map(
                            (skill) => `
                            <div class="skill-item">
                                <span>${skill.name}</span>
                                <span>${skill.level}%</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>

            <div class="section">
                <h3 class="section-title">Học vấn</h3>
                ${cvData.education
                  .map(
                    (edu) => `
                    <div class="education-item">
                        <h3>${edu.degree}</h3>
                        <div class="institution">${edu.institution}</div>
                        <div class="period">${edu.period}</div>
                        <p>${edu.description}</p>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <div class="section">
                <h3 class="section-title">Dự án nổi bật</h3>
                <div class="projects-grid">
                    ${cvData.projects
                      .map(
                        (project) => `
                        <div class="project-item">
                            <h4>${project.title}</h4>
                            <p>${project.description}</p>
                            <div class="technologies">Công nghệ: ${project.technologies}</div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>

        <script>
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                    setTimeout(function() {
                        window.close();
                    }, 1000);
                }, 500);
            }
        </script>
    </body>
    </html>
  `

  printWindow.document.write(cvHTML)
  printWindow.document.close()
}

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroOverlay = document.querySelector(".hero-overlay")
  if (heroOverlay) {
    heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}
