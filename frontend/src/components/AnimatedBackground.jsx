import React, { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

const AnimatedBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        let waves = []

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            console.log('Canvas resized:', canvas.width, 'x', canvas.height)
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        console.log('AnimatedBackground initialized')

        // Particle class for floating particles
        class Particle {
            constructor() {
                this.reset()
                this.y = Math.random() * canvas.height
                this.opacity = Math.random() * 0.5 + 0.2
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = -10
                this.size = Math.random() * 4 + 2
                this.speedY = Math.random() * 0.5 + 0.2
                this.speedX = Math.random() * 0.3 - 0.15
                this.opacity = Math.random() * 0.3 + 0.6
                this.hue = Math.random() * 60 + 260 // Purple to blue range
            }

            update() {
                this.y += this.speedY
                this.x += this.speedX

                if (this.y > canvas.height) {
                    this.reset()
                }

                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX *= -1
                }
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`
                ctx.fill()

                // Add glow effect
                ctx.shadowBlur = 20
                ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`
                ctx.fill()
                ctx.shadowBlur = 0
            }
        }

        // Wave class for animated waves
        class Wave {
            constructor(yOffset, amplitude, frequency, speed, color) {
                this.yOffset = yOffset
                this.amplitude = amplitude
                this.frequency = frequency
                this.speed = speed
                this.color = color
                this.offset = 0
            }

            update() {
                this.offset += this.speed
            }

            draw() {
                ctx.beginPath()
                ctx.moveTo(0, canvas.height / 2 + this.yOffset)

                for (let x = 0; x < canvas.width; x++) {
                    const y = Math.sin((x * this.frequency) + this.offset) * this.amplitude + canvas.height / 2 + this.yOffset
                    ctx.lineTo(x, y)
                }

                ctx.lineTo(canvas.width, canvas.height)
                ctx.lineTo(0, canvas.height)
                ctx.closePath()

                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
                gradient.addColorStop(0, this.color.replace('ALPHA', '0.15'))
                gradient.addColorStop(1, this.color.replace('ALPHA', '0.05'))
                ctx.fillStyle = gradient
                ctx.fill()
            }
        }

        // Geometric shape class
        class GeometricShape {
            constructor() {
                this.reset()
                this.y = Math.random() * canvas.height
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = -50
                this.size = Math.random() * 50 + 30
                this.speedY = Math.random() * 0.3 + 0.1
                this.speedX = Math.random() * 0.2 - 0.1
                this.rotation = Math.random() * Math.PI * 2
                this.rotationSpeed = (Math.random() - 0.5) * 0.02
                this.opacity = Math.random() * 0.3 + 0.5
                this.type = Math.floor(Math.random() * 3) // 0: triangle, 1: square, 2: hexagon
                this.hue = Math.random() * 60 + 260
            }

            update() {
                this.y += this.speedY
                this.x += this.speedX
                this.rotation += this.rotationSpeed

                if (this.y > canvas.height + 50) {
                    this.reset()
                }
            }

            draw() {
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.rotate(this.rotation)
                ctx.strokeStyle = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`
                ctx.lineWidth = 2
                ctx.shadowBlur = 25
                ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, ${this.opacity * 0.8})`

                ctx.beginPath()
                if (this.type === 0) {
                    // Triangle
                    ctx.moveTo(0, -this.size / 2)
                    ctx.lineTo(this.size / 2, this.size / 2)
                    ctx.lineTo(-this.size / 2, this.size / 2)
                    ctx.closePath()
                } else if (this.type === 1) {
                    // Square
                    ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size)
                } else {
                    // Hexagon
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i
                        const x = Math.cos(angle) * this.size / 2
                        const y = Math.sin(angle) * this.size / 2
                        if (i === 0) ctx.moveTo(x, y)
                        else ctx.lineTo(x, y)
                    }
                    ctx.closePath()
                }
                ctx.stroke()
                ctx.shadowBlur = 0
                ctx.restore()
            }
        }

        // Initialize particles
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle())
        }

        // Waves removed per user request

        // Initialize geometric shapes
        const shapes = []
        for (let i = 0; i < 15; i++) {
            shapes.push(new GeometricShape())
        }

        // Connection lines between particles
        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        const opacity = (1 - distance / 150) * 0.4
                        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }
            }
        }

        // Animation loop
        const animate = () => {
            // Create a deep black gradient background
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            bgGradient.addColorStop(0, '#000000')
            bgGradient.addColorStop(0.5, '#0a0a0a')
            bgGradient.addColorStop(1, '#050505')
            ctx.fillStyle = bgGradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw and update geometric shapes
            shapes.forEach(shape => {
                shape.update()
                shape.draw()
            })

            // Draw connections
            drawConnections()

            // Draw and update particles
            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="animated-background"
        />
    )
}

export default AnimatedBackground
